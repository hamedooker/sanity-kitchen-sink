export default {
  widgets: [
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
                  buildHookId: '5fed2bc21266047ec164c380',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-edkitvfc',
                  apiId: 'f2b97cdd-7584-47c0-943d-cbb08d299ba6'
                },
                {
                  buildHookId: '5fed2bc22e91f879195d17b1',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-d6qnwir6',
                  apiId: 'dcb6a12c-e483-491a-8ccf-a6fc2717bced'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hamedooker/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-d6qnwir6.netlify.app', category: 'apps'}
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
