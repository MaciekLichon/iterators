import Container from './components/Container/Container';
import AccountSummary from './components/AccountSummary/AccountSummary';
import EmployeeCard from './components/EmployeeCard/EmployeeCard';
import Sources from './components/Sources/Sources';

const App = () => {
  
  return (
    <Container>
      <AccountSummary />
      <EmployeeCard />
      <Sources />
    </Container>
  )
}

export default App;
