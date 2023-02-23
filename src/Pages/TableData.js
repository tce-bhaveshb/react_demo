export default function TableData() {
  let n = new Date();
  let today = (n.getDate()) + "/" + (n.getMonth() + 1) + "/" + (n.getFullYear());


  return (
    <>
      <datalist id="presentabsent">
        <option value="Present" />
        <option value="Absent" />
      </datalist>
      <div className="text-center">
        <h3>Attendance Report</h3><h5>Date : {today}</h5>
      </div><hr />
      <form>
        <table className="table">

          <thead>
            <tr>
              <th scope="col">Roll&nbsp;No.</th>
              <th scope="col">Name</th>
              <th scope="col">Attendance</th>
              <th scope="col">In-Time</th>
              <th scope="col">Out-Time</th>
              <th scope="col">Current Subject</th>
              <th scope="col">Package</th>
              <th scope="col">Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">101</th>
              <td>Mark</td>
              <td><input list="presentabsent" /></td>
              <td><input type="time" /></td>
              <td><input type="time" /></td>
              <td><input type="text" className="form-control form-control-sm" /></td>
              <td>Pro</td>
              <td><input type="text" className="form-control form-control-sm" /></td>
            </tr>
            <tr>
              <th scope="row">102</th>
              <td>Jacob</td>
              <td><input list="presentabsent" /></td>
              <td><input type="time" /></td>
              <td><input type="time" /></td>
              <td><input type="text" className="form-control form-control-sm" /></td>
              <td>Pro</td>
              <td><input type="text" className="form-control form-control-sm" /></td>
            </tr>
            <tr>
              <th scope="row">103</th>
              <td>Larry</td>
              <td><input list="presentabsent" /></td>
              <td><input type="time" /></td>
              <td><input type="time" /></td>
              <td><input type="text" className="form-control form-control-sm" /></td>
              <td>Pro</td>
              <td><input type="text" className="form-control form-control-sm" /></td>
            </tr>
          </tbody>
        </table>
        <div className="col-md-12 text-center">
          <button type="submit" className="btn btn-primary btn-sm">Submit</button>&nbsp;
          <button type="reset" className="btn btn-secondary btn-sm">Reset</button>
        </div>
        <footer>
                <p><Link to="/LandingPage">Back to Homepage</Link></p>
            </footer>
      </form>
    </>
  );
}

//const TimeStyle = { width: "80px" }