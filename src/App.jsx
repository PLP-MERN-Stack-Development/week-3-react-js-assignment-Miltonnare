
import Layout from './components/Layout'
import Card from './components/card'
import TaskManager from './components/TaskManager'
import Button from './components/Button'

function App(){
  return(
    <Layout>
      <Card title="Welcome to the Task Manager">
        <p>Feel Entusiastic to be here</p>
        <div className='mt-4 space-x-2'>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </Card>
    </Layout>

  )
}

export default App;