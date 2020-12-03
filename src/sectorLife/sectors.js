import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Row, Col } from 'antd';
import ListView from './list';
import './list.css';

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
  "SealPre1Failed",
  "SealPre2Failed",
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
  "OspRequest",
  "OspRequested",
  "OspCommitting",
  "OfflineDealsReady",
  "OfflineDealsReadyFailed",

  "UndefinedSectorState",
];

function FormCol() {
  let cols = states.map((item, index) => {
    return (
      <Col key={index}>
          <div className="col-header">
            {item}
          </div>
          <ListView/>
      </Col>
    ) 
  });

  return <div>
    <Row wrap={false}>{cols}</Row>
  </div>
}

class SectorView extends React.Component {
  render() {
    return <FormCol/>;
  }
}

export default SectorView;