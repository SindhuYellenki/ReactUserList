import UserProfile from './components/UserProfile'
import './App.css'

const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Sindhu',
    role: 'Software Developer',
  },
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Shashi',
    role: 'Software Developer',
    uniqueNo: 2,
  },
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Aditi',
    role: 'Software Developer',
    uniqueNo: 3,
  },
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Akshara',
    role: 'Software Developer',
    uniqueNo: 4,
  },
]

const App = () => (
  <div className=".list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {userDetailsList.map(each => (
        <UserProfile userDetails={each} />
      ))}
    </ul>
  </div>
)

export default App
