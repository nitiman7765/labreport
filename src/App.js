
import './App.css';

function App() {
  return (
   
    <div>
    <Doctor />
    <hr color="blue"></hr>
    <Info />
    <hr color="blue"></hr>
    <LaboratoryResults/>
    <ProteinActivityTests/>
    <Table1/>
    <AntibodiesTests/>
    <Table2/>
    <ImpressionbyConsultantOfficer/>
    <Lastline/>
    <Buttonsss/>
    </div>
  );
};
const Buttonsss = () =>{
  return (
  <div className="b">

 
    <button type="button" class="btn btn-primary">Close</button> </div>
  )

}
const Lastline = () =>{
  return(
    <div className="lastline"> 
  <p>Protein S is Modertely Reduced ,However Protien C is Within Normal Limits .</p>
</div>
  )
}

const ImpressionbyConsultantOfficer = ()=>{
  return(
  
<div className="test3">
  <p>Impression by Consultant Officer</p>
</div>


  )
}
const Table2 = () =>{
  return(
    <div>
    <table className="table2">
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Test Name</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1.</td>
          <td>Lupus Anticoagulant</td>
          <td>Negative</td>
          <td>Nor Range : ( 70-142 %)</td>
        </tr>
        <tr>
          <td>2.</td>
          <td>Antithrombin Activity</td>
          <td>Positive</td>
          <td>Nor Range : ( 50-150 %)</td>
        </tr>
      </tbody>
    </table>
  </div>

  )
}
const AntibodiesTests = () =>{
  return(
    <div className="test2">
    <p>Antibodies Tests</p>
       </div>
  )
}
const Table1 = ()=>{
  return(
   
        <div>
          <table className="table1">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Test Name</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>Protein C activity</td>
                <td>127.0%</td>
                <td>Nor Range : ( 70-142 %)</td>
              </tr>
              <tr>
                <td>2.</td>
                <td>Protein S activity</td>
                <td>29.4%</td>
                <td>Nor Range : ( 50-150 %)</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    };

const ProteinActivityTests = () =>{
  return(
    <div className="test">
 <p>Protein Activity Test</p>
    </div>
  );
};
const LaboratoryResults = () =>{
  return(
  <div className="lab">
    <p>
      Laboratory Results
    </p>
  </div>
  );
};
const Doctor = () => {
  return (
    <div className="doc">
      <div>
        <h2 className="doctor">Dr. Srishti Bhatt</h2>
        <p>MBBS | MD()</p>
        <p>Clinic Address</p>
        <p>98XXXXXX51 | user@domain.com</p>
      </div>
    </div>
  );
};
const Info = () => {
  return (
    <div>
      <div className="info">
        <p>
          <b>Name: </b>Nishant Sharma
        </p>
        <p>
          <b>Age: </b>24Yrs
        </p>
        <p>
          <b>Sex: </b>Male
        </p>
        <p>
          <b>Date: </b>02/07/2021
        </p>
      </div>

      <p className="para">
        <b>Address: </b>Patient Address
      </p>

      <div className="info">
        <p>
          <b>Contact: </b>97XXXXXX51
        </p>
        <p>
          <b>E-mail: </b>user@domain.com
        </p>
      </div>
    </div>
  );
};


export default App;
