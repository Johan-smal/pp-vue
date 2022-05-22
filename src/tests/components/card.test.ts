import { mount } from '@vue/test-utils'
import Card from '../../components/Card.vue'

test('mount component', async () => {
  expect(Card).toBeTruthy()

  const title = 'the title'
  const defaultSlot = 'Main Content'
  const actionsSlot = 'a button or something'

  const wrapper = mount(Card, {
    props: {
      title
    },
    slots: {
      default: defaultSlot,
      actions: actionsSlot
    }
  })

  expect(wrapper.text()).toContain(title)
  expect(wrapper.text()).toContain(defaultSlot)
  expect(wrapper.text()).toContain(actionsSlot)
})
