export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '61b4c7218d16ff5582a98ff9',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-86e3drtn',
                  apiId: 'ce9e051f-6435-42f8-bf6e-79ded77ac3ec'
                },
                {
                  buildHookId: '61b4c721216a991bf9cdf862',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-x2jndm58',
                  apiId: '95ae1327-1357-40ce-a892-215e56fc9976'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/myatthu-mm/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-x2jndm58.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
