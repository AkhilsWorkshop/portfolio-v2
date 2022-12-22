interface SanityCommon {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    }
}

export interface Skills extends SanityCommon {
    _type: string;
    image: Image;
    name: string;
    property: string;
}

export interface Projects extends SanityCommon {
    _type: string;
    title: string;
    description: string;
    github: string;
    demo: string;
    mobileImg: Image;
    desktopImg: string;
    tags: string[];
}