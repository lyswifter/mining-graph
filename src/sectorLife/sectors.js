import React from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import '../index.css';
import './list.css';
import ListView from './list';

const states = [
  "Empty", 
  "WaitDeals", 
  "Packing",
  "GetTicket",
  "PreCommit1",
  "PreCommit2",
  "PreCommitting",
  "PreCommitWait",
  "WaitSeed",
  "Committing",
  "SubmitCommit",
  "CommitWait",
  "FinalizeSector",
  "Proving",
  "FailedUnrecoverable",
  "SealPreCommit1Failed",
  "SealPreCommit2Failed",
  "PreCommitFailed",
  "ComputeProofFailed",
  "CommitFailed",
  "PackingFailed",
  "FinalizeFailed",
  "DealsExpired",
  "RecoverDealIDs",
  "Faulty",
  "FaultReported",
  "FaultedFinal",
  "Removing",
  "RemoveFailed",
  "Removed",
  "SlaveCommittingFailed",
  "SlaveCommitFailed",
  "PreSealed",
  "ReSealing",
  "ReSealedFailed",
  "SlaveFinal",
  "Downloading",
  "DownloadFailed",
  "ProxyCommitted",
  "ProxyFetchingSector",
  "OrphanFailed",
  "OspCommittingRequest",
  "OspCommittingRequested",
  "OspCommitting",
  "OfflineDealsReady",
  "OfflineDealsReadyFailed",

  "UndefinedSectorState",
];

function FormSectorView() {
  let cols = states.map((item, index) => {
    return (
      <Col key={index}>
          <ListView stat={item}/>
      </Col>
    ) 
  });

  return <div>
    <Row wrap={false}>{cols}</Row>
  </div>
}

class SectorView extends React.Component {
  render() {
    return <FormSectorView/>;
  }
}

export default SectorView;