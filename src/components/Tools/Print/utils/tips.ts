export interface Tip {
  title: string;
  text: string;
}
export interface Tips {
  title: string;
  tips: Tip[];
}
export const tips: Tips = {
  title: 'Print Tips',
  tips: [
    {
      title: 'Exports Tab',
      text: 'All exports saved during your session will now appear in the exports tab.',
    },
    {
      title: 'Map Only',
      text: 'Use this option to export map, without the layout frame, for use in reports.  You can specifiy the pixel size of the resulting image.',
    },
  ],
};
