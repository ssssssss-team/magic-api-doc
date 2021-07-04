export default {
  data: () => ({
    version: {},
    urls: {
      npm: "https://img.shields.io/npm/v/:repo.json",
      maven: "https://img.shields.io/maven-metadata/v.json?label=maven-central&metadataUrl=https%3A%2F%2Frepo1.maven.org%2Fmaven2%2F:repo%2Fmaven-metadata.xml",
    },
  }),
  methods: {
    changeVersion: function (v) {
      let repos = CONFIG.repos;
      if (typeof repos !== "undefined" && repos.length > 0) {
        try {
          setTimeout(() => {
            var elements = this.$el.getElementsByClassName("content__default");
            if (elements !== undefined) {
              elements.forEach((element) => {
                var content = element.innerHTML;
                repos.forEach((repoConfig) => {
                  let keywords = repoConfig.keywords;
                  let version = this.version[repoConfig.repo];
                  content = content.replace(keywords, version);
                });
                element.innerHTML = content;
              });
            }
          }, 1000);
        } catch (e) {
          /* do not handle for now */
        }
      } else {
        console.warn("repo config is empty, ignore");
        return;
      }
    },
    getLastestVersion: function (v) {
      let repos = CONFIG.repos;
      if (typeof repos !== "undefined" && repos.length > 0) {
        try {
          repos.forEach((repoConfig) => {
            let currentRepoVersion = this.version[repoConfig.repo];
            if (currentRepoVersion === undefined || currentRepoVersion === "") {
              let self = this;
              const templateUrl = this.urls[repoConfig.type];
              if (templateUrl !== null && templateUrl !== undefined) {
                const url = templateUrl.replace(/:repo/g, repoConfig.repo.replace(/[\/.]/g, '%2F'));
                fetch(url)
                  .then((res) => {
                    if (res.status >= 400) {
                      throw new Error("Bad response from server");
                    }
                    return res.json();
                  })
                  .then((versionInfo) => {
                    self.version[repoConfig.repo] = versionInfo.value.replace(
                      "v",
                      ""
                    );
                  });
              }
            }
            this.changeVersion();
          });
        } catch (e) {
          /* do not handle for now */
        }
      } else {
        console.warn("repo config is empty, ignore");
        return;
      }
    },
  },

  watch: {
    version: "changeVersion",
  },

  mounted() {
    this.getLastestVersion();
  },

  updated() {
    this.getLastestVersion();
  },
};
