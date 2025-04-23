import { createApp, h } from 'chibivue'

const app = createApp({
  render() {
    return h('div', { id: 'my-app' }, [
      h('p', { style: 'color: red; font-weight: bold;' }, ['Hello chibivue']),
      h(
        'button',
        {
          onClick() {
            alert('Hello chibivue!!')
            console.log('Hello chibivue!!')
          },
        },
        ['click me!'],
      ),
    ])
  },
})

app.mount('#app')
