import './Header.css';
import withLogger from '../../hoc/withLogger';

const Header = () => {
  return (
    <header className="site-header">
      <div className="logo">Dev Insights</div>

      <nav>
        <a href="#new-post">New Post</a>
      </nav>
    </header>
  );
};

export default withLogger(Header, 'Header');