// Organizes the Studio sidebar so Dr. Poatob sees friendly, grouped
// sections instead of a flat alphabetical list of document types.
export const structure = (S) =>
  S.list()
    .title('Portfolio Content')
    .items([
      S.listItem()
        .title('Site Settings & Bio')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),

      S.listItem().title('Qualifications').child(S.documentTypeList('qualification').title('Qualifications')),
      S.listItem().title('Employment History').child(S.documentTypeList('employment').title('Employment History')),
      S.listItem().title('Teaching Experience').child(S.documentTypeList('teachingExperience').title('Teaching Experience')),
      S.listItem().title('Areas of Specialization').child(S.documentTypeList('specialization').title('Areas of Specialization')),
      S.listItem().title('Positions Held').child(S.documentTypeList('position').title('Positions Held')),
      S.listItem().title('Professional Memberships').child(S.documentTypeList('membership').title('Professional Memberships')),
      S.divider(),

      S.listItem().title('Grants').child(S.documentTypeList('grant').title('Grants')),
      S.listItem().title('Projects').child(S.documentTypeList('project').title('Projects')),
      S.listItem().title('Publications').child(S.documentTypeList('publication').title('Publications')),
      S.listItem().title('Awards & Honours').child(S.documentTypeList('award').title('Awards & Honours')),
      S.divider(),

      S.listItem().title('Blog / Insights / Updates').child(S.documentTypeList('post').title('Blog / Insights / Updates')),
      S.listItem().title('Consultancy Services').child(S.documentTypeList('consultancyService').title('Consultancy Services')),
    ])
