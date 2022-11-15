import { useParams } from 'react-router-dom';

const SectionPage = () => {
  const { id } = useParams();

  return (
    <h1>
      section -
      {id}
    </h1>
  );
};

export default SectionPage;