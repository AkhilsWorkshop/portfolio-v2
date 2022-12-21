interface SanityCommon {
    _createdAt: String;
    _id: String;
    _rev: String;
    _updatedAt: String;
}

interface Image {
    _type: "image";
    asset: {
        _ref: String;
        _type: "reference";
    }
}

export interface Skills extends SanityCommon {
    _type: String;
    image: Image;
    name: String;
}