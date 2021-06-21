import CalcSum from './CalcSum';
import Button from './Button';

const Header = () => {

  return (
    <>
      <div className="container">
        <h1>Test Task</h1>
        <CalcSum />
        <Button />
      </div>
    </>
  );
}

export default Header;