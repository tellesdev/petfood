import Logo from '../../assets/logo.png';
import Ilustration from '../../assets/illustration.png'

const Cadastro = () => {
  return (
    <div className="container-fluid h-100 bg-primary">
      <div className="col-12">
        <img src={Logo} />
      </div>
      <div className="col-6">
        <img src={Ilustration}/>
      </div>
      <div className="col-6"></div>
    </div>
  );
};

export default Cadastro;
