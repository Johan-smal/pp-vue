import { mount } from '@cypress/vue'
import Card from '../../components/Card.vue'

it('renders a message', () => {
  const title = 'the title'
  const defaultSlot = 'Main Content'
  const actionsSlot = 'a button or something'

  mount(Card, {
    props: {
      title
    },
    slots: {
      default: defaultSlot,
      actions: actionsSlot
    }
  })

  cy.get('h3').contains(title)
  cy.get('div').contains(defaultSlot)
  cy.get('div').contains(actionsSlot)
})