import { ShareButtons } from 'react-share';

import { VK_LINK, INSTAGRAM_LINK, FACEBOOK_LINK } from './app-info';

const {
  FacebookShareButton,
  VKShareButton,
  TwitterShareButton,
  TelegramShareButton,
  GooglePlusShareButton
} = ShareButtons;

const SOCIAL_NETWORKS = {
  vk: {
    faName: 'vk',
    shareIcon: VKShareButton,
    url: VK_LINK
  },
  instagram: {
    faName: 'instagram',
    url: INSTAGRAM_LINK
  },
  fb: {
    faName: 'facebook',
    shareIcon: FacebookShareButton,
    url: FACEBOOK_LINK
  },
  twitter: {
    faName: 'twitter',
    shareIcon: TwitterShareButton
  },
  telegram: {
    faName: 'telegram',
    shareIcon: TelegramShareButton
  },
  gPlus: {
    faName: 'google-plus',
    shareIcon: GooglePlusShareButton
  }
};

export default SOCIAL_NETWORKS;
