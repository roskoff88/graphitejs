import Layout from '../components/MyLayout.js';
import withData from '../lib/withData';

const Index = withData(() => (
  <Layout>
    <h1>Home</h1>
  </Layout>
));

export default Index;
