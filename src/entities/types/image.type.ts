export type ImageType = {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: "image";
  service_version: string;
  title: string;
  url: string;
};

export type ImageErrorType = {
  error: {
    code: string;
    message: string;
  };
};

export type VideoType = {
  media_type: "video";
  service_version: string;
  title: string;
  url: string;
};
