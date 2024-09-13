import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedSupportService extends Schema.Component {
  collectionName: 'components_shared_support_services';
  info: {
    displayName: 'info_support';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title_support: Attribute.String & Attribute.Required;
    url: Attribute.String;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'earth';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    avatar: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
    description: Attribute.Text;
    keyword: Attribute.Text;
  };
}

export interface SharedMail extends Schema.Component {
  collectionName: 'components_shared_mail';
  info: {
    displayName: 'mail';
    icon: 'bulletList';
  };
  attributes: {
    mail: Attribute.Email;
  };
}

export interface SharedImage extends Schema.Component {
  collectionName: 'components_shared_images';
  info: {
    displayName: 'Image';
    icon: 'earth';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
    alt: Attribute.String;
    link: Attribute.String & Attribute.Required;
  };
}

export interface SharedHotline extends Schema.Component {
  collectionName: 'components_shared_hotlines';
  info: {
    displayName: 'hotline';
    icon: 'bulletList';
  };
  attributes: {
    hotline: Attribute.String;
  };
}

export interface HomeTabHome extends Schema.Component {
  collectionName: 'components_home_tab_homes';
  info: {
    displayName: 'tab_home';
    icon: 'stack';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    images: Attribute.Component<'shared.image', true>;
  };
}

export interface HomeShareExp extends Schema.Component {
  collectionName: 'components_home_share_exps';
  info: {
    displayName: ' share_exp';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'KINH NGHI\u1EC6M HAY'>;
    img_share_exp: Attribute.Component<'shared.image'> & Attribute.Required;
  };
}

export interface HomeListPartner extends Schema.Component {
  collectionName: 'components_home_list_partners';
  info: {
    displayName: 'list_partner';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'\u0110\u1ED0I T\u00C1C H\u1EE2P T\u00C1C'>;
    img_partner: Attribute.Component<'shared.image', true> & Attribute.Required;
  };
}

export interface HomeKhacbiet extends Schema.Component {
  collectionName: 'components_home_khacbiets';
  info: {
    displayName: 'tab_khacbiet';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    content_khacbiet: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBalloon';
        }
      >;
    img_khacbiet: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
  };
}

export interface HomeImageDetailContent extends Schema.Component {
  collectionName: 'components_home_image_detail_contents';
  info: {
    displayName: 'image_detail_content';
    icon: 'stack';
  };
  attributes: {
    name: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    url_detail: Attribute.String;
  };
}

export interface HomeContentDetailHome extends Schema.Component {
  collectionName: 'components_home_content_detail_homes';
  info: {
    displayName: 'content_detail_home';
    icon: 'stack';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    image_detail: Attribute.Component<'home.image-detail-content', true>;
  };
}

export interface HeaderSubNav extends Schema.Component {
  collectionName: 'components_header_sub_navs';
  info: {
    displayName: 'Sub_nav';
    icon: 'bulletList';
  };
  attributes: {
    name: Attribute.String;
    link: Attribute.String;
    submenu: Attribute.Component<'header.normal-nav', true>;
  };
}

export interface HeaderNormalNav extends Schema.Component {
  collectionName: 'components_header_normal_navs';
  info: {
    displayName: 'normal_nav';
    icon: 'bulletList';
  };
  attributes: {
    name: Attribute.String;
    link: Attribute.String;
  };
}

export interface FooterThongTinXuong extends Schema.Component {
  collectionName: 'components_footer_thong_tin_xuongs';
  info: {
    displayName: 'thong_tin_xuong';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title_footer_3: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'X\u01AF\u1EDENG T\u1EA0I HCM'>;
    company_information: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBalloon';
        }
      >;
    verify_registration: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Attribute.Required;
    anh_xuong: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
  };
}

export interface FooterInformation extends Schema.Component {
  collectionName: 'components_footer_information';
  info: {
    displayName: 'Information';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    name_comany: Attribute.String & Attribute.Required;
    mail: Attribute.Component<'shared.mail', true> & Attribute.Required;
    list_social: Attribute.Component<'shared.seo', true> & Attribute.Required;
    hotline: Attribute.Component<'shared.hotline', true> & Attribute.Required;
    thoi_gian_lam_viec: Attribute.String & Attribute.Required;
    title_footer_1: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'TH\u00D4NG TIN LI\u00CAN H\u1EC6'>;
  };
}

export interface FooterCustomerSupport extends Schema.Component {
  collectionName: 'components_footer_customer_supports';
  info: {
    displayName: 'Customer_support';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title_footer_2: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'H\u1ED6 TR\u1EE2 KH\u00C1CH H\u00C0NG'>;
    maps: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBalloon';
        }
      >;
    info_support: Attribute.Component<'shared.support-service', true> &
      Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.support-service': SharedSupportService;
      'shared.seo': SharedSeo;
      'shared.mail': SharedMail;
      'shared.image': SharedImage;
      'shared.hotline': SharedHotline;
      'home.tab-home': HomeTabHome;
      'home.share-exp': HomeShareExp;
      'home.list-partner': HomeListPartner;
      'home.khacbiet': HomeKhacbiet;
      'home.image-detail-content': HomeImageDetailContent;
      'home.content-detail-home': HomeContentDetailHome;
      'header.sub-nav': HeaderSubNav;
      'header.normal-nav': HeaderNormalNav;
      'footer.thong-tin-xuong': FooterThongTinXuong;
      'footer.information': FooterInformation;
      'footer.customer-support': FooterCustomerSupport;
    }
  }
}
