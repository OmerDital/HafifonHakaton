import {
  Accordion, AccordionDetails, AccordionSummary, Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/use-fetch';

const SectionPage = () => {
  const { id } = useParams();

  const [data] = useFetch(`sections/${id}`);

  return (
    <>
      {data?.subjects.map(subject => (
        <Accordion key={subject.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography>{subject?.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default SectionPage;