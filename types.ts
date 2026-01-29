
export enum VideoType {
  SHORT = 'SHORT',
  LONG = 'LONG'
}

export interface VideoWork {
  id: string;
  type: VideoType;
  title: string;
  // Made embedUrl optional as it is not used directly; platform-specific IDs are preferred.
  embedUrl?: string;
  tiktokId?: string;
}
