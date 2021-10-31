import { useEffect, useState } from 'react';
import styled from 'styled-components';
import JobPostingDetail from './JobPostingDetail';
import JobPostingCard from '../../components/JobPostingCard/JobPostingCard';
import JOB_POSTING_DATA from '../../components/JobPostingCard/data/JobPostingData';
import JOB_POSTING_DETAIL_DATA from './data/JobPostingDetailData';

export default function Jobs(props) {
  const { searchLocation = '대한민국', searchKeyword = 'React' } = props;

  const [jobPostingList, setJobPostingList] = useState([]);

  useEffect(() => {
    setJobPostingList(JOB_POSTING_DATA);
  }, []);

  return (
    <Container>
      <ListSection>
        <SearchResultSummary>
          <p className="searchKeyword">
            {searchLocation} {searchKeyword}
          </p>
          <p className="searchResult">결과 {jobPostingList.length}</p>
        </SearchResultSummary>
        <CardWrapper>
          {jobPostingList.map(post => (
            <JobPostingCard
              key={post.jobPostingId}
              {...post}
              isMain={false}
              showBtn={false}
              showBorder={false}
            />
          ))}
        </CardWrapper>
      </ListSection>
      <DetailSection>
        <JobPostingDetail {...JOB_POSTING_DETAIL_DATA} />
      </DetailSection>
    </Container>
  );
}

const Container = styled.div`
  position: relative; //TopNav관련 temp 솔루션으로 추가했습니다 -성재
  display: flex;
  top: 52px; //TopNav관련 temp 솔루션으로 추가했습니다 -성재
  width: 1128px;
  margin: 0 auto;
`;

const StyledSection = styled.section`
  position: relative;
  height: 826px;
  overflow: scroll;
`;

const ListSection = styled(StyledSection)`
  width: 44.5%;
  border-left: 1px solid ${({ theme }) => theme.colors.borderGrey};
`;

const DetailSection = styled(StyledSection)`
  width: 55.5%;
  border: 1px solid ${({ theme }) => theme.colors.borderGrey};
`;

const SearchResultSummary = styled.div`
  position: fixed;
  top: 52px; //TopNav관련 temp 솔루션으로 추가했습니다 -성재
  width: 501px;
  height: 56px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  z-index: 1; // TopNav랑 겹쳐서 1로 낮췄습니다. -성재

  .searchKeyword {
    margin: 11px 0 6px 10px;
    font-size: 17px;
  }

  .searchResult {
    margin-left: 10px;
    font-size: 13px;
  }
`;

const CardWrapper = styled.div`
  position: absolute;
  top: 56px;
`;
