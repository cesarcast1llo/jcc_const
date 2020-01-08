import Link from 'next/link';
import Header from '../components/Header';
import HeadMeta from '../components/HeadMeta';
import Footer from '../components/Footer';
import '../styles/websitename.scss';

export default function About() {
  const foo = { name: 'tom', age: 30, nervous: 'duh' };
  const nar = { name: 'tommmmmy', age: 20, nervous: 'duh' };
  const buzz = { name: 'joe', age: 303, nervous: 'nahh' };

  const woody = { name: 'wooduy', age: 33333, nervous: 'howdy' };

  let frindz = [foo.name, nar.name, buzz.name];

  return (
    <React.Fragment>
      <Header />
      <HeadMeta
        title="About Page"
        description="filled in with description of page"
        keywords="keywords for google stuff"
      />
      {console.log(frindz)}

      {console.log('add two new frindezzz')}

      {console.log((frindz = [...frindz, woody.name]))}
      <div className="about-page" style={{ margin: '0 auto' }}>
        <h1>This is the about page</h1>
        <h1>This is the about page</h1> <h1>This is the about page</h1>{' '}
        <h1>This is the about page</h1> <h1>This is the about page</h1>{' '}
        <h1>This is the about page</h1> <h1>This is the about page</h1>{' '}
        <h1>This is the about page</h1> <h1>This is the about page</h1>{' '}
        <h1>This is the about page</h1> <h1>This is the about page</h1>{' '}
        <h1>This is the about page</h1> <h1>This is the about page</h1>{' '}
        <h1>This is the about page</h1> <h1>This is the about page</h1>{' '}
        <h1>This is the about page</h1> <h1>This is the about page</h1>{' '}
        <h1>This is the about page</h1> <h1>This is the about page</h1>{' '}
        <h1>This is the about page</h1> <h1>This is the about page</h1>{' '}
        <h1>This is the about page</h1> <h1>This is the about page</h1>{' '}
        <h1>This is the about page</h1> <h1>This is the about page</h1>{' '}
        <h1>This is the about page</h1> <h1>This is the about page</h1>{' '}
        <h1>This is the about page</h1> <h1>This is the about page</h1>{' '}
        <h1>This is the about page</h1> <h1>This is the about page</h1>{' '}
        <h1>This is the about page</h1> <h1>This is the about page</h1>{' '}
        <h1>This is the about page</h1> <h1>This is the about page</h1>{' '}
        <h1>This is the about page</h1> <h1>This is the about page</h1>{' '}
        <h1>This is the about page</h1> <h1>This is the about page</h1>{' '}
        <h1>This is the about page</h1> <h1>This is the about page</h1>{' '}
        <h1>This is the about page</h1>
        {/* { console.log('%c frindz', 'color: orange;font-size: 40px;font-weight: 700;') }
          { console.table([foo,nar, buzz]) } */}
      </div>
      <Footer />
    </React.Fragment>
  );
}
