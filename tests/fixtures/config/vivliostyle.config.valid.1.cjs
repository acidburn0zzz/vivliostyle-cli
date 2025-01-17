module.exports = {
  title: 'title',
  author: 'author',
  theme: ['../themes/debug-theme'],
  entry: [
    'manuscript.md',
    {
      path: 'manuscript.md',
      title: 'title',
      theme: {
        specifier: 'theme.css',
      },
    },
  ],
  entryContext: '.',
  output: [
    'output1.pdf',
    {
      path: 'output2.pdf',
      format: 'pdf',
    },
  ],
  size: 'size',
  pressReady: true,
  language: 'language',
  toc: './toc.html',
  cover: './cover.png',
  timeout: 1,
  workspaceDir: 'workspaceDir',
  vfm: {
    hardLineBreaks: true,
    disableFormatHtml: true,
  },
  readingProgression: 'rtl',
  browser: 'firefox',
  viewerParam: 'foo=bar',
};
