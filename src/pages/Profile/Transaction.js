import React, { useEffect, useState } from "react";
import axios from "axios";

import { Table } from "react-bootstrap";
import Navbar from "../../components/navbar-in";

const Transaction = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    axios.get("/dummy.json").then((res) => setPosts(res.data));
  };

  useEffect(() => {
    console.log("test");
    getPosts();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="restaurant " style={{ height: "100vh" }}>
        <div>
          <h3
            style={{
              fontSize: "36px",
              fontWeight: "800",
            }}
            className="mb-5"
          >
            Income Transaction
          </h3>

          <Table bordered hover className="table">
            <thead
              className="text-align-center"
              style={{ backgroundColor: "#E5E5E5" }}
            >
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Address</th>
                <th>Product Order</th>
                <th>Status</th>
                <th style={{ textAlign: "center" }}>Action</th>
              </tr>
            </thead>
            <tbody style={{ backgroundColor: "white" }}>
              <tr>
                <td>1</td>
                <td>Sugeng No Pants</td>
                <td>Cilengsi</td>
                <td>Paket Geprek</td>
                <td>Waiting Approve</td>
                <td className="tb-action ">
                  <img style={{ marginRight: "10px" }} />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Haris Gams</td>
                <td>Serang</td>
                <td>Paket Geprek</td>
                <td>Success</td>
                <td className="tb-action"></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Aziz Union</td>
                <td>Bekasi</td>
                <td>Paket Geprek</td>
                <td>Cancel</td>
                <td className="tb-action"></td>
              </tr>
              <tr>
                <td>4</td>
                <td>Lae Tanjung balai</td>
                <td>Tanjung Balai</td>
                <td>Paket Geprekt</td>
                <td>On The Way</td>
                <td className="tb-action"></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
