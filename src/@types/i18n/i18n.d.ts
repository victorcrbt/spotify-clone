declare namespace I18N {
  export type TranslationNamespaces =
    | 'words'
    | 'terms'
    | 'pages'
    | 'components';

  export interface ResourceLanguage {
    words: Words;
    terms: Terms;
    pages: Pages;
    components: Components;
  }

  export interface TranslationKeys {
    words: Words;
    terms: Terms;
    components: Components;
    pages: Pages;
  }

  interface Pages {
    test: string;
  }

  interface Words {
    home: string;
    search: string;
    library: string;
    playlist: string;
    song: string;
  }

  interface Terms {}

  interface Components {
    leftSideBar: {
      homeButton: string;
      searchButton: string;
      libraryButton: string;
      createPlaylistButton: string;
      likedSongsButton: string;
    };

    rightSideBar: {
      headerTitle: string;
    };
  }
}
