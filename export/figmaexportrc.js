const commandIllustrativePage = [
  'components',
  {
    fileId: 'jJuofS6stfBoDUdslXXzDM',
    onlyFromPages: ['Library_illustrative_icons'],
    // filterComponent: (component) => !/^figma/.test(component.name), // optional
    transformers: [
      require('@minolettinat/proxy-figma-export-transform-svg-with-svgo')({
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
              },
            },
          },
          {
            name: 'removeDimensions',
            active: true,
          },
        ],
      }),
    ],
    outputters: [
      require('@minolettinat/proxy-figma-export-output-components-as-svg')({
        output: './output/components',
      }),
    ],
  },
];

const commandMenuPage = [
  'components',
  {
    fileId: 'jJuofS6stfBoDUdslXXzDM',
    // version: 'xxx123456', // optional - file's version history is only supported on paid Figma plans
    onlyFromPages: ['Library_menu_icons'],
    // filterComponent: (component) => !/^figma/.test(component.name), // optional
    transformers: [
      require('@minolettinat/proxy-figma-export-transform-svg-with-svgo')({
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
              },
            },
          },
          {
            name: 'removeDimensions',
            active: true,
          },
        ],
      }),
    ],
    outputters: [
      require('@minolettinat/proxy-figma-export-output-components-as-svg')({
        output: './output/components',
      }),
    ],
  },
];

const commandOtherPage = [
  'components',
  {
    fileId: 'jJuofS6stfBoDUdslXXzDM',
    // version: 'xxx123456', // optional - file's version history is only supported on paid Figma plans
    onlyFromPages: ['Library_other_icons'],
    // filterComponent: (component) => !/^figma/.test(component.name), // optional
    transformers: [
      require('@minolettinat/proxy-figma-export-transform-svg-with-svgo')({
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
              },
            },
          },
          {
            name: 'removeDimensions',
            active: true,
          },
        ],
      }),
    ],
    outputters: [
      require('@minolettinat/proxy-figma-export-output-components-as-svg')({
        output: './output/components',
      }),
    ],
  },
];

module.exports = {
  commands: [commandIllustrativePage, commandMenuPage, commandOtherPage],
};
