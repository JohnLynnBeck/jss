'use strict';

export default {
  url: 'docs',
  displayName: 'Docs',
  children: [
    {
      url: 'getting-started',
      displayName: 'Getting Started',
      children: [
        {
          url: 'quick-start',
          displayName: '1. Quick Start',
        },
        {
          url: 'first-component',
          displayName: '2. Your First Component',
        },
        {
          url: 'jss-server-install',
          displayName: '3. JSS Server Setup',
        },
        {
          url: 'app-deployment',
          displayName: '4. App Deployment',
        },
      ],
    },
    {
      url: 'fundamentals',
      displayName: 'Fundamentals',
      children: [
        {
          url: 'architecture',
          displayName: 'Architecture',
        },
        {
          url: 'understanding-layout',
          displayName: 'Understanding layout',
        },
        {
          url: 'personalization',
          displayName: 'Personalization',
        },
        {
          url: 'dev-workflows',
          displayName: 'Developer workflows',
          children: [
            {
              url: 'overview',
              displayName: 'Overview',
            },
            {
              url: 'code-first',
              displayName: 'Code-first',
            },
            {
              url: 'sitecore-first',
              displayName: 'Sitecore-first',
            },
          ],
        },
        {
          url: 'application-modes',
          displayName: 'Application modes',
        },
        {
          url: 'cli',
          displayName: 'JSS CLI',
        },
        {
          url: 'services',
          displayName: 'Services and APIs',
          children: [
            {
              url: 'app-configuration',
              displayName: 'App Configuration',
            },
            {
              url: 'app-import',
              displayName: 'App Import',
            },
            {
              url: 'layout-service',
              displayName: 'Layout Service',
            },
            {
              url: 'graphql',
              displayName: 'GraphQL',
            },
            {
              url: 'tracking',
              displayName: 'Tracking',
            },
            {
              url: 'dictionary-service',
              displayName: 'Dictionary Service',
            },
            {
              url: 'view-engine',
              displayName: 'View Engine / SSR',
            },
          ],
        },
      ],
    },
    {
      url: 'client-frameworks',
      displayName: 'Client Frameworks',
      children: [
        {
          url: 'react',
          displayName: 'React',
          children: [
            {
              url: 'react-overview',
              displayName: 'Overview',
            },
            {
              url: 'sample-app',
              displayName: 'Sample App',
            },
            {
              url: 'react-placeholders',
              displayName: 'Placeholder Techniques',
            },
          ],
        },
        {
          url: 'vue',
          displayName: 'Vue',
          children: [
            {
              url: 'vue-overview',
              displayName: 'Overview',
            },
            {
              url: 'sample-app',
              displayName: 'Sample App',
            },
            {
              url: 'vue-placeholders',
              displayName: 'Placeholder Techniques',
            },
            {
              url: 'reference',
              displayName: 'Package Reference',
            },
          ],
        },
        {
          url: 'angular',
          displayName: 'Angular',
          children: [
            {
              url: 'angular-overview',
              displayName: 'Overview',
            },
            {
              url: 'sample-app',
              displayName: 'Sample App',
            },
            {
              url: 'angular-tips',
              displayName: 'Tips + Best Practices',
            },
            {
              url: 'angular-placeholders',
              displayName: 'Placeholder Techniques',
            },
            {
              url: 'reference',
              displayName: 'API Reference',
            },
          ],
        },
        {
          url: 'react-native',
          displayName: 'React Native',
        },
      ],
    },
    {
      url: 'techniques',
      displayName: 'Techniques',
      children: [
        {
          url: 'mvc-integration',
          displayName: 'Sitecore MVC Integration',
          children: [
            {
              url: 'javascript-rendering',
              displayName: 'JavaScript Rendering Type',
            },
            {
              url: 'client-side-embedding',
              displayName: 'Client-side Embedding',
            },
          ],
        },
        {
          url: 'working-disconnected',
          displayName: 'Working Disconnected',
          children: [
            {
              url: 'disconnected-overview',
              displayName: 'Overview',
            },
            {
              url: 'manifest-api',
              displayName: 'Data and Component Definitions',
            },
            {
              url: 'import-process',
              displayName: 'The Import Process',
            },
            {
              url: 'extending-import',
              displayName: 'Import Pipeline Extension',
            },
            {
              url: 'customizing-disconnected',
              displayName: 'Customizing Disconnected Data',
            },
          ],
        },
        {
          url: 'working-connected',
          displayName: 'Working Connected',
        },
        {
          url: 'graphql',
          displayName: 'GraphQL + JSS',
          children: [
            {
              url: 'graphql-overview',
              displayName: 'Overview',
            },
            {
              url: 'integrated-graphql',
              displayName: 'Integrated GraphQL',
            },
            {
              url: 'connected-graphql',
              displayName: 'Connected GraphQL',
            },
          ],
        },
        {
          url: 'ssr',
          displayName: 'Server-side Rendering',
          children: [
            {
              url: 'integrated-mode-ssr',
              displayName: 'via Sitecore Integrated Mode',
            },
            {
              url: 'headless-mode-ssr',
              displayName: 'via Headless Mode',
            },
            {
              url: 'server-rendering-viewbag',
              displayName: 'Adding Data for SSR',
            },
            {
              url: 'configuring-and-debugging-ssr',
              displayName: 'Configuring and Debugging SSR',
            },
          ],
        },
        {
          url: 'content-translation',
          displayName: 'Translation',
        },
        {
          url: 'authentication',
          displayName: 'Authentication',
          children: [
            {
              url: 'sitecore-auth',
              displayName: 'Sitecore Authentication',
            },
            {
              url: 'federated-auth',
              displayName: 'Federated Authentication',
            },
          ],
        },
        {
          url: 'extending-layout-service',
          displayName: 'Layout Service Extensibility',
          children: [
            {
              url: 'extending-layout-service-overview',
              displayName: 'Overview',
            },
            {
              url: 'layoutservice-extending-context',
              displayName: 'Extending Route Context Data',
            },
            {
              url: 'layoutservice-static-context-rendering',
              displayName: 'Static Layouts in Context Data',
            },
            {
              url: 'layoutservice-rendering-contents',
              displayName: 'Customizing Rendering Data',
            },
          ],
        },
        {
          url: 'dynamic-placeholders',
          displayName: 'Dynamic Placeholders',
        },
        {
          url: 'devops',
          displayName: 'DevOps Guide',
        },
        {
          url: 'azure-deployment',
          displayName: 'Azure Deployment',
        },
        {
          url: 'custom-create-templates',
          displayName: 'Custom App Templates',
        },
      ],
    },
  ],

  docs: {
    url: 'docs',
    displayName: 'Docs',
    children: [
      {
        url: 'getting-started',
        displayName: 'Getting Started',
        children: [
          {
            url: 'quick-start',
            displayName: '1. Quick Start',
          },
          {
            url: 'first-component',
            displayName: '2. Your First Component',
          },
          {
            url: 'jss-server-install',
            displayName: '3. JSS Server Setup',
          },
          {
            url: 'app-deployment',
            displayName: '4. App Deployment',
          },
        ],
      },
      {
        url: 'fundamentals',
        displayName: 'Fundamentals',
        children: [
          {
            url: 'architecture',
            displayName: 'Architecture',
          },
          {
            url: 'understanding-layout',
            displayName: 'Understanding layout',
          },
          {
            url: 'personalization',
            displayName: 'Personalization',
          },
          {
            url: 'dev-workflows',
            displayName: 'Developer workflows',
            children: [
              {
                url: 'overview',
                displayName: 'Overview',
              },
              {
                url: 'code-first',
                displayName: 'Code-first',
              },
              {
                url: 'sitecore-first',
                displayName: 'Sitecore-first',
              },
            ],
          },
          {
            url: 'application-modes',
            displayName: 'Application modes',
          },
          {
            url: 'cli',
            displayName: 'JSS CLI',
          },
          {
            url: 'services',
            displayName: 'Services and APIs',
            children: [
              {
                url: 'app-configuration',
                displayName: 'App Configuration',
              },
              {
                url: 'app-import',
                displayName: 'App Import',
              },
              {
                url: 'layout-service',
                displayName: 'Layout Service',
              },
              {
                url: 'graphql',
                displayName: 'GraphQL',
              },
              {
                url: 'tracking',
                displayName: 'Tracking',
              },
              {
                url: 'dictionary-service',
                displayName: 'Dictionary Service',
              },
              {
                url: 'view-engine',
                displayName: 'View Engine / SSR',
              },
            ],
          },
        ],
      },
      {
        url: 'client-frameworks',
        displayName: 'Client Frameworks',
        children: [
          {
            url: 'react',
            displayName: 'React',
            children: [
              {
                url: 'react-overview',
                displayName: 'Overview',
              },
              {
                url: 'sample-app',
                displayName: 'Sample App',
              },
              {
                url: 'react-placeholders',
                displayName: 'Placeholder Techniques',
              },
            ],
          },
          {
            url: 'vue',
            displayName: 'Vue',
            children: [
              {
                url: 'vue-overview',
                displayName: 'Overview',
              },
              {
                url: 'sample-app',
                displayName: 'Sample App',
              },
              {
                url: 'vue-placeholders',
                displayName: 'Placeholder Techniques',
              },
              {
                url: 'reference',
                displayName: 'Package Reference',
              },
            ],
          },
          {
            url: 'angular',
            displayName: 'Angular',
            children: [
              {
                url: 'angular-overview',
                displayName: 'Overview',
              },
              {
                url: 'sample-app',
                displayName: 'Sample App',
              },
              {
                url: 'angular-tips',
                displayName: 'Tips + Best Practices',
              },
              {
                url: 'angular-placeholders',
                displayName: 'Placeholder Techniques',
              },
              {
                url: 'reference',
                displayName: 'API Reference',
              },
            ],
          },
          {
            url: 'react-native',
            displayName: 'React Native',
          },
        ],
      },
      {
        url: 'techniques',
        displayName: 'Techniques',
        children: [
          {
            url: 'mvc-integration',
            displayName: 'Sitecore MVC Integration',
            children: [
              {
                url: 'javascript-rendering',
                displayName: 'JavaScript Rendering Type',
              },
              {
                url: 'client-side-embedding',
                displayName: 'Client-side Embedding',
              },
            ],
          },
          {
            url: 'working-disconnected',
            displayName: 'Working Disconnected',
            children: [
              {
                url: 'disconnected-overview',
                displayName: 'Overview',
              },
              {
                url: 'manifest-api',
                displayName: 'Data and Component Definitions',
              },
              {
                url: 'import-process',
                displayName: 'The Import Process',
              },
              {
                url: 'extending-import',
                displayName: 'Import Pipeline Extension',
              },
              {
                url: 'customizing-disconnected',
                displayName: 'Customizing Disconnected Data',
              },
            ],
          },
          {
            url: 'working-connected',
            displayName: 'Working Connected',
          },
          {
            url: 'graphql',
            displayName: 'GraphQL + JSS',
            children: [
              {
                url: 'graphql-overview',
                displayName: 'Overview',
              },
              {
                url: 'integrated-graphql',
                displayName: 'Integrated GraphQL',
              },
              {
                url: 'connected-graphql',
                displayName: 'Connected GraphQL',
              },
            ],
          },
          {
            url: 'ssr',
            displayName: 'Server-side Rendering',
            children: [
              {
                url: 'integrated-mode-ssr',
                displayName: 'via Sitecore Integrated Mode',
              },
              {
                url: 'headless-mode-ssr',
                displayName: 'via Headless Mode',
              },
              {
                url: 'server-rendering-viewbag',
                displayName: 'Adding Data for SSR',
              },
              {
                url: 'configuring-and-debugging-ssr',
                displayName: 'Configuring and Debugging SSR',
              },
            ],
          },
          {
            url: 'content-translation',
            displayName: 'Translation',
          },
          {
            url: 'authentication',
            displayName: 'Authentication',
            children: [
              {
                url: 'sitecore-auth',
                displayName: 'Sitecore Authentication',
              },
              {
                url: 'federated-auth',
                displayName: 'Federated Authentication',
              },
            ],
          },
          {
            url: 'extending-layout-service',
            displayName: 'Layout Service Extensibility',
            children: [
              {
                url: 'extending-layout-service-overview',
                displayName: 'Overview',
              },
              {
                url: 'layoutservice-extending-context',
                displayName: 'Extending Route Context Data',
              },
              {
                url: 'layoutservice-static-context-rendering',
                displayName: 'Static Layouts in Context Data',
              },
              {
                url: 'layoutservice-rendering-contents',
                displayName: 'Customizing Rendering Data',
              },
            ],
          },
          {
            url: 'dynamic-placeholders',
            displayName: 'Dynamic Placeholders',
          },
          {
            url: 'devops',
            displayName: 'DevOps Guide',
          },
          {
            url: 'azure-deployment',
            displayName: 'Azure Deployment',
          },
          {
            url: 'custom-create-templates',
            displayName: 'Custom App Templates',
          },
        ],
      },
    ],
    links: [
      {
        url: 'release-notes',
        displayName: 'Release Notes',
        className: 'nav-link'
      },
      {
        url: 'help',
        displayName: 'Help',
        className: 'nav-link'
      }
    ]
  },

  jssConnected: {
    url: 'jss-connected',
    displayName: 'JSS Connected',
    children: [
      {
        url: 'getting-started',
        displayName: 'Getting Started',
        children: [
          {
            url: 'getting-started',
            displayName: 'Getting Started With JSS Connected Demo',
          }
        ]
      },
      {
        url: 'connecting',
        displayName: 'Connecting to the Habitat Fitness Sitecore JSS Website',
        children: [
          {
            url: 'connecting',
            displayName: 'Node.js',
          },
          {
            url: 'connecting#installing-the-habitat-fitness-demo-app-project',
            displayName: 'Installing Habitat Fitness Demo App Project',
          },
          {
            url: 'connecting#connecting-the-local-app-to-the-sitecore-instance',
            displayName: 'Connecting the Local App to the Sitecore Instance',
          }
        ]
      },
      {
        url: 'data-generation',
        displayName: 'Data Generation for xProfile',
        children: [
          {
            url: 'xprofile',
            displayName: 'Interact with the app to generate data for xProfile',
          },
        ]
      },
      {
        url: 'experience-editor',
        displayName: 'Experience Editor',
        children: [
          {
            url: 'launch-ee',
            displayName: 'Launch Experience Editor',
          },
        ]
      },
      {
        url: 'personalization',
        displayName: 'Personalization',
        children: [
          {
            url: 'personalization-in-ee',
            displayName: 'Personalization in Experience Editor',
          },
          {
            url: 'personalization-in-ee#how-the-rule-is-built',
            displayName: 'How the Rule is Built',
          },
        ]
      },
      {
        url: 'xprofile',
        displayName: 'xProfile',
        children: [
          {
            url: 'launch-xprofile',
            displayName: 'Launch Experience Profile',
          }
        ]
      },
      {
        url: 'component-update',
        displayName: 'Component Update',
        children: [
          {
            url: 'making-a-change',
            displayName: 'Making a Change to a Component',
          }
        ]
      },
      {
        url: 'graphql',
        displayName: 'GraphQL',
        children: [
          {
            url: 'explore',
            displayName: 'Explore where the data lives in Sitecore Content Editor',
          },
          {
            url: 'graph-browser',
            displayName: 'The Graph Browser',
          }
        ]
      },
    ],
    links: []
  }
};
