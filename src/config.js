import { FlumeConfig, Colors, Controls } from 'flume';

const config = new FlumeConfig();
config.addPortType({
  type: 'string',
  name: 'string',
  label: 'Text',
  color: Colors.green,
  controls: [
    Controls.text({
      name: 'string',
      label: 'Text',
    }),
  ],
});
export default config;
