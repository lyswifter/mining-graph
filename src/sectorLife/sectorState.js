const SectorStates = [
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
]

export default SectorStates;