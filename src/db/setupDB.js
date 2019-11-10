export default {
  settingsStore: {
    html: {
      name: 'html',
      value: true,
      label: 'html',
      description: 'using for activate deactivate button for copy html notes'
    },
    md: {
      name: 'md',
      value: true,
      label: 'markdown',
      description: 'using for activate deactivate button for copy markdown notes'
    },
    txt: {
      name: 'txt',
      value: true,
      label: 'text',
      description: 'using for, activate deactivate button for copy text notes'
    },
    time_offset: {
      name: 'time_offset',
      value: 3,
      label: 'time offset',
      description:
        'using for set time offset seconds for saved current time video, accessible value 0, 3, 5, 10, default value 3 seconds'
    }
  },
  demoVideo: {
    url: 'https://youtu.be/cCOL7MC4Pl0',
    title: 'видео инструкция',
    notes: [
      {
        url: 'https://youtu.be/cCOL7MC4Pl0',
        title: 'some text',
        time: 123.34
      },
      {
        url: 'https://youtu.be/24',
        title: 'some description text',
        time: 12.34
      }
    ]
  }
};