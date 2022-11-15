import { Box, Card, LinearProgress, Typography } from "@mui/material";
import { useMemo } from "react";
import useFetch from "../../../hooks/use-fetch";

const ManageAlbums = () => {
  const [trainees] = useFetch<any[]>('/trainees');
  const [sections] = useFetch<any[]>('/sections');
  const allTasks = useMemo(() => sections?.reduce((acc, current) => 
    acc + current.subjects.reduce((subjAcc: any, subject: { tasks: string | any[]; }) => subjAcc + subject.tasks.length, 0)
  , 0), [sections]);
  
  const getProgress = (progress: any) => progress.length / allTasks * 100;

  return (
    <> 
    {
      sections && trainees?.map(x =>
        <Card key={x.id} sx={{ width: 1, height: 'fit-content', p: 2, m: 2 }}>
            <Typography variant='h4'>{x.name}</Typography>
            <Typography variant='body2'>התקדמות: {getProgress(x.progress)}%</Typography>
            <Box sx={{ width: 1 }}>
              <LinearProgress variant="determinate" color="success" value={getProgress(x.progress)} />
            </Box>
        </Card>
        )
    }
    </>
  );
};

export default ManageAlbums;