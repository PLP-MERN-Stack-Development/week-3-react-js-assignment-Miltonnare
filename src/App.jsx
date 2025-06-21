import Layout from './components/Layout'
import Card from './components/card'
import TaskManager from './components/TaskManager'
import Button from './components/Button'
import Posts from './components/Posts' 

function App() {
  return (
    <Layout>
      <Card title="Welcome to the Task Manager">
        <p>Feel Enthusiastic to be here</p>
        <div className='mt-4 space-x-2'>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </Card>

      <div className="mt-8">
        <Card title="Task Management">
          <TaskManager />
        </Card>
      </div>

      <div className="mt-8">
        <Posts /> {/*  Displaying fetched API data with search and pagination */}
      </div>
    </Layout>
  )
}

export default App
