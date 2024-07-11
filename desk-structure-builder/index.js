import S from '@sanity/desk-tool/structure-builder';
import { FiSettings } from 'react-icons/fi';
import { SiGooglemessages } from 'react-icons/si';

import parentChild from './parent-child';


export default () => S.list()
  .title('Content')
  .items([
    S.documentTypeListItem('blog').title('Posts'),
    parentChild('category'),
    S.documentTypeListItem('author').title('Authors'),
    S.divider(),
    S.listItem()
        .title('Contact Page Settings')
        .icon(FiSettings)
        .child(
          S.document()
            .schemaType('contactPage')
            .documentId('contactPage')
            .title('Contact Page Settings')
        ),
    S.documentTypeListItem('submission')
        .title('Form Submissions')
        .icon(SiGooglemessages),
    S.divider(),
    S.listItem()
        .title('Site Settings')
        .icon(FiSettings)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Site Settings')
        ),
  ])