import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateMeeting } from "../../redux/actions/MeetingActions";
import { Modal } from "../Modal/index";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const Dashboard = () => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const [meet, setMeet] = useState(true);
  const handleClick = (e) => {
    console.log(e.target.innerHTML);
    let selectedDate = e.target.innerHTML;
    // if (e.detail === 1) {
    //   alert("single click");
    // } else if (e.detail === 2) {
    //   alert("double click");
    // }
    // setModal((prev) => !prev);
    dispatch(updateMeeting(selectedDate));
  };
  const RenderHeaderRow = () => {
    return (
      <tr>
        {days.map((day, index) => {
          return <th key={index}>{day}</th>;
        })}
      </tr>
    );
  };
  return (
    <div className="table-wrapper">
      {modal ? <Modal /> : null}
      <table>
        <tbody onClick={handleClick}>
          {<RenderHeaderRow />}
          <tr>
            <td>
              {meet ? (
                <Link to={`/home/meeting/25`} className="button">
                  <span>25</span>
                  <span className="dot"></span>
                </Link>
              ) : (
                <span>25</span>
              )}
            </td>
            <td>
              <span>26</span>
            </td>
            <td>
              <span>27</span>
            </td>
            <td>
              <span>28</span>
            </td>
            <td>
              <span>29</span>
            </td>
            <td>
              <span>30</span>
            </td>
            <td>
              <span>31</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1</span>
            </td>
            <td>
              <span>2</span>
            </td>
            <td>
              <span>3</span>
            </td>
            <td>
              <span>4</span>
            </td>
            <td>
              <span>5</span>
            </td>
            <td>
              <span>6</span>
            </td>
            <td>
              <span>7</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>8</span>
            </td>
            <td>
              <span>9</span>
            </td>
            <td>
              <span>10</span>
            </td>
            <td>
              <span>11</span>
            </td>
            <td>
              <span>12</span>
            </td>
            <td>
              <span>13</span>
            </td>
            <td>
              <span>14</span>
            </td>
          </tr>
          <tr>
            <td>15</td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
            <td>19</td>
            <td>20</td>
            <td>21</td>
          </tr>
          <tr>
            <td>22</td>
            <td>23</td>
            <td>24</td>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
