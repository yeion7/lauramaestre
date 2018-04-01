import CMS from 'netlify-cms';
import 'netlify-cms/dist/cms.css';

import landingPreview from './preview-templates/landingPreview';
import servicesPreview from './preview-templates/servicesPreview';
import PostPreview from './preview-templates/blogPreview';
import AboutPagePreview from './preview-templates/aboutPreview';

CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('blog', PostPreview);
CMS.registerPreviewTemplate('eventos', landingPreview);
CMS.registerPreviewTemplate('services', servicesPreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
