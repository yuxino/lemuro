import pify from 'pify';
import ncp from 'ncp';

/** Asynchronous recursive file copying with Node.js */
export default pify(ncp);
