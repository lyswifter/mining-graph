// let states = [
//     "Empty", 
//     "WaitDeals", 
//     "Packing",
//     "GetTicket",
//     "PreCommit1",
//     "PreCommit2",
//     "PreCommitting",
//     "PreCommitWait",
//     "WaitSeed",
//     "Committing",
//     "SubmitCommit",
//     "CommitWait",
//     "FinalizeSector",
//     "Proving",
//     "FailedUnrecoverable",
//     "SealPreCommit1Failed",
//     "SealPreCommit2Failed",
//     "PreCommitFailed",
//     "ComputeProofFailed",
//     "CommitFailed",
//     "PackingFailed",
//     "FinalizeFailed",
//     "DealsExpired",
//     "RecoverDealIDs",
//     "Faulty",
//     "FaultReported",
//     "FaultedFinal",
//     "Removing",
//     "RemoveFailed",
//     "Removed",
//     "SlaveCommittingFailed",
//     "SlaveCommitFailed",
//     "PreSealed",
//     "ReSealing",
//     "ReSealedFailed",
//     "SlaveFinal",
//     "Downloading",
//     "DownloadFailed",
//     "ProxyCommitted",
//     "ProxyFetchingSector",
//     "OrphanFailed",
//     "OspCommittingRequest",
//     "OspCommittingRequested",
//     "OspCommitting",
//     "OfflineDealsReady",
//     "OfflineDealsReadyFailed",

//     "UndefinedSectorState",
// ]

// export default SectorStates;


/*
// happy path
Empty          SectorState = "Empty"
WaitDeals      SectorState = "WaitDeals"     // waiting for more pieces (deals) to be added to the sector
Packing        SectorState = "Packing"       // sector not in sealStore, and not on chain
GetTicket      SectorState = "GetTicket"     // generate ticket
PreCommit1     SectorState = "PreCommit1"    // do PreCommit1
PreCommit2     SectorState = "PreCommit2"    // do PreCommit2
PreCommitting  SectorState = "PreCommitting" // on chain pre-commit
PreCommitWait  SectorState = "PreCommitWait" // waiting for precommit to land on chain
WaitSeed       SectorState = "WaitSeed"      // waiting for seed
Committing     SectorState = "Committing"    // compute PoRep
SubmitCommit   SectorState = "SubmitCommit"  // send commit message to the chain
CommitWait     SectorState = "CommitWait"    // wait for the commit message to land on chain
FinalizeSector SectorState = "FinalizeSector"
Proving        SectorState = "Proving"
// error modes
FailedUnrecoverable  SectorState = "FailedUnrecoverable"
SealPreCommit1Failed SectorState = "SealPreCommit1Failed"
SealPreCommit2Failed SectorState = "SealPreCommit2Failed"
PreCommitFailed      SectorState = "PreCommitFailed"
ComputeProofFailed   SectorState = "ComputeProofFailed"
CommitFailed         SectorState = "CommitFailed"
PackingFailed        SectorState = "PackingFailed" // TODO: deprecated, remove
FinalizeFailed       SectorState = "FinalizeFailed"
DealsExpired         SectorState = "DealsExpired"
RecoverDealIDs       SectorState = "RecoverDealIDs"

Faulty        SectorState = "Faulty"        // sector is corrupted or gone for some reason
FaultReported SectorState = "FaultReported" // sector has been declared as a fault on chain
FaultedFinal  SectorState = "FaultedFinal"  // fault declared on chain

Removing     SectorState = "Removing"
RemoveFailed SectorState = "RemoveFailed"
Removed      SectorState = "Removed"

SlaveCommittingFailed   SectorState = "SlaveCommittingFailed"
SlaveCommitFailed       SectorState = "SlaveCommitFailed"
PreSealed               SectorState = "PreSealed"
ReSealing               SectorState = "ReSealing"
ReSealedFailed          SectorState = "ReSealedFailed"
SlaveFinal              SectorState = "SlaveFinal"
SectorDownloading       SectorState = "Downloading"
DownloadFailed          SectorState = "DownloadFailed"
ProxyCommitted          SectorState = "ProxyCommitted"
ProxyFetchingSector     SectorState = "ProxyFetchingSector"
OrphanFailed            SectorState = "OrphanFailed"
OspCommittingRequest    SectorState = "OspCommittingRequest"   // OSP compute PoRep
OspCommittingRequested  SectorState = "OspCommittingRequested" // OSP compute PoRep
OspCommitFailed         SectorState = "OspCommitting"          // OSP compute PoRep
OfflineDealsReady       SectorState = "OfflineDealsReady"
OfflineDealsReadyFailed SectorState = "OfflineDealsReadyFailed"
*/