import { storiesOf } from '@storybook/vue'
import { Button } from '../src/components/atoms'

storiesOf('atoms', module).add('Button', () => ({
  components: {
    Button
  },
  template: `<Button />`
}))
