export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'HosamAlmoghraby/sanity-angular-website'
      }
    },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '623e10c981e73d0eb6790354',
                  title: 'Sanity Studio',
                  name: 'sanity-angular-website-studio-hqwvahku',
                  apiId: '02e7c6d5-3f57-4114-bcf3-19b0a631464b'
                },
                {
                  buildHookId: '623e10cab6d36c0ddcc8cad6',
                  title: 'Website',
                  name: 'sanity-angular-website-web-tgdkzb8f',
                  apiId: '1d565beb-2c3d-47e0-a39e-80d9066d24f1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/HosamAlmoghraby/sanity-angular-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-angular-website-web-tgdkzb8f.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
