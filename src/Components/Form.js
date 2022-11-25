import { Nav } from "./Nav";

function Easyform() {
    return (
        <>
    <Nav></Nav>
    <br/>
   <section className="vh-100" style={{color:"black" }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-9">
                        <h1 className="text-white mb-4">Create a Job</h1>
                        <div className="card" style={{ borderRadius: 15 }}>
                            <div className="card-body">
                                <div className="row align-items-center pt-4 pb-3">
                                    <div className="col-md-3 ps-5">
                                        <h6 className="mb-0">Job Title</h6>
                                    </div>
                                    <div className="col-md-9 pe-5">
                                        <input type="text" className="form-control form-control-lg" placeholder="Job Title"/>
                                    </div>
                                </div>
                                <hr className="mx-n3" />
                                <div className="row align-items-center py-3">
                                    <div className="col-md-3 ps-5">
                                        <h6 className="mb-0">Skills Required</h6>
                                    </div>
                                    <div className="col-md-9 pe-5">
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            placeholder="Skills"
                                        />
                                    </div>
                                </div>
                                <hr className="mx-n3" />

                                <div className="row align-items-center py-3">
                                    <div className="col-md-3 ps-5">
                                        <h6 className="mb-0">Experience Required</h6>
                                    </div>
                                    <div className="col-md-9 pe-5">
                                        <input
                                            type="number"
                                            className="form-control form-control-lg"
                                            placeholder="Experience in years"
                                        />
                                    </div>
                                </div>
                                <hr className="mx-n3" />

                                <div className="row align-items-center py-3">
                                    <div className="col-md-3 ps-5">
                                        <h6 className="mb-0">Job Description</h6>
                                    </div>
                                    <div className="col-md-9 pe-5">
                                        <textarea
                                            className="form-control"
                                            rows={3}
                                            placeholder="Job Description"
                                            defaultValue={""}
                                        />
                                    </div>
                                </div>
                                
                                <div className="px-5 py-4">
                                    <button type="submit" className="btn btn-primary btn-lg">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </> 
  
      
    );
  }
  
export default Easyform;