import * as React from "react";
import "../index.css";
import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import { SearchHeadlessProvider } from "@yext/search-headless-react";
import PageLayout from "../components/layouts/PageLayout";
import SearchLayout from "../components/locatorPage/SearchLayout";
import {
  stagingBaseurl,
  favicon,
  AnalyticsEnableDebugging,
  AnalyticsEnableTrackingCookie,
} from "../../sites-global/global";
import { JsonLd } from "react-schemaorg";
import { StaticData } from "../../sites-global/staticData";
import {
  AnalyticsProvider,
  AnalyticsScopeProvider,
} from "@yext/pages/components";
import { AnswerExperienceConfig } from "../config/answersHeadlessConfig";

// export const config: TemplateConfig = {
//   stream: {
//     $id: "Locator",
//     // Specifies the exact data that each generated document will contain. This data is passed in
//     // directly as props to the default exported function.
//     fields: [
//       "name",

//     ],
//     // Defines the scope of entities that qualify for this stream.
//     filter: {
//       entityIds: ["global-data"]
//     },
//     // The entity language profiles that documents will be generated for.
//     localization: {
//       locales: ["en"],
//       primary: false,
//     },
//   },
// };

export const getPath: GetPath<TemplateProps> = () => {
  return `/index.html`;
};
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: `${document.c_meta_title
        ? document.c_meta_title
        : `CSB Near Me - Find CSB Branch Locator Here.`
      }`,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: `${document.c_meta_description
              ? document.c_meta_description
              : `View Timber Merchants near you today at MGM Timber. We stock high-quality, robust products at competitive rates.`
            }`,
        },
      },

      {
        type: "meta",
        attributes: {
          name: "author",
          content: StaticData.Brandname,
        },
      },

      {
        type: "meta",
        attributes: {
          name: "robots",
          content: "noindex, nofollow",
        },
      },
      {
        type: "link",
        attributes: {
          rel: "shortcut icon",
          href: favicon,
        },
      },

      {
        type: "link",
        attributes: {
          rel: "canonical",
          href: `${document._site?.c_canonical ? document.c_canonical : stagingBaseurl
            }`,
        },
      },

      {
        type: "meta",
        attributes: {
          property: "og:description",
          content: `${document.c_meta_description
              ? document.c_meta_description
              : `View Timber Merchants near you today at MGM Timber. We stock high-quality, robust products at competitive rates.`
            }`,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:title",
          content: `${document.c_meta_title
              ? document.c_meta_title
              : `CSB Near Me - Find CSB Branch Locator Here.`
            }`,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:image",
          content: favicon,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:card",
          content: "summary",
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:description",
          content: `${document.c_meta_description
              ? document.c_meta_description
              : `View Timber Merchants near you today at MGM Timber. We stock high-quality, robust products at competitive rates.`
            }`,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:title",
          content: `${document.c_meta_title
              ? document.c_meta_title
              : `Chai Sutta Bar Near Me - Find CSB Branch Locator Here.`
            }`,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:image",
          content: favicon,
        },
      },
    ],
  };
};

const Locator: Template<TemplateRenderProps> = ({ document, __meta }) => {
  const { _site } = document;

  let templateData = { document: document, __meta: __meta };
  const endpoints = {
    universalSearch:
      "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/query",
    verticalSearch:
      "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/query",
    questionSubmission:
      "https://liveapi-sandbox.yext.com/v2/accounts/me/createQuestion",
    universalAutocomplete:
      "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/autocomplete",
    verticalAutocomplete:
      "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/autocomplete",
    filterSearch:
      "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/filtersearch",
  };
  var Api = "AIzaSyDZNQlSlEIkFAct5VzUtsP4dSbvOr2bE18";
  return (
    <>
      <JsonLd<locator>
        item={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "MGM ",
          url: stagingBaseurl,
          logo: favicon,
        }}
      />
      <AnalyticsProvider
        templateData={templateData}
        enableDebugging={AnalyticsEnableDebugging}
        enableTrackingCookie={AnalyticsEnableTrackingCookie}
      >
        {" "}
        <AnalyticsScopeProvider name={""}>
          <PageLayout _site={_site}>
            <div className="module-wrapper module-u99U0wuYuR module-centered_hero">
              <div className="module-content">
                <div className="lp-param lp-param-u99U0wuYuR-image image-outer-container" style={{ backgroundImage: "URL('//dynl.mktgcdn.com/p-sandbox/DtlAmZz2b4LVcE0jyWfPOfX8maQR0OH5FT8bOmC7GEU/800x600.jpg')" }}>
                  <div className="image-overlay" style={{padding: "11.95rem"}}>
                    <div className="image-inner-container container">
                      <h2 className="lp-param lp-param-u99U0wuYuR-headline headline">CSB'S NEAR ME</h2>
                      <div className="ctas">
                        <a className="btn primary-cta btn-primary btn-lg lp-param lp-param-u99U0wuYuR-buttonText lp-param-u99U0wuYuR-buttonUrl" href="https://boards.greenhouse.io/turtleheadtacos/jobs/132" role="button " data-pages-analytics="calltoactionclick">Have A Tea</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <SearchHeadlessProvider
              experienceKey={AnswerExperienceConfig.experienceKey}
              locale={AnswerExperienceConfig.locale}
              apiKey={AnswerExperienceConfig.apiKey}
              verticalKey={AnswerExperienceConfig.verticalKey}
              experienceVersion="STAGING"
              sessionTrackingEnabled={true}
              endpoints={AnswerExperienceConfig.endpoints}
            >
              <SearchLayout _site={_site} />
            </SearchHeadlessProvider>
          </PageLayout>
        </AnalyticsScopeProvider>
      </AnalyticsProvider>
    </>
  );
};

export default Locator;
