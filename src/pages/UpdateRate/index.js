import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import StarRatings from 'react-star-ratings';
import { BounceLoader } from 'react-spinners';
import * as Yup from 'yup';
import api from '../../services/api';

import './styles.css';

const schema = Yup.object().shape({
  comment: Yup.string()
    .required('A descrição não deve ser nula'),
});

function UpdateRate({ history, match }) {
  const [attendance, setAttendance] = useState(0);
  const [experience, setExperience] = useState(0);
  const [costBenefit, setCostBenefit] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async ({ comment }) => {
    const items = [
      {
        itemId: 1,
        gradeId: attendance,
      },
      {
        itemId: 2,
        gradeId: experience,
      },
      {
        itemId: 3,
        gradeId: costBenefit,
      },
    ];

    setLoading(true);
    await api.put(`/rates/${match.params.id}`, { comment, items });
    setLoading(false);

    history.goBack();
  };

  return (
    <main style={{ paddingTop: 0, marginTop: '20px' }}>
      <div className="main-container">
        <h5 style={{ backgroundColor: 'rgb(69, 39, 160)' }}>Avaliação de intercâmbio</h5>
        <Form style={{ padding: '10px' }} schema={schema} onSubmit={handleSubmit}>
          <h6 className="title">Qualidade no Atendimento</h6>
          <div>
            <StarRatings
              rating={attendance}
              changeRating={(value) => setAttendance(value)}
              starHoverColor="yellow"
              numberOfStars={5}
              starRatedColor="yellow"
              starDimension="30px"
            />
          </div>

          <h6 style={{ marginTop: '20px' }} className="title">Experiência do Intercâmbio</h6>
          <div style={{ marginBottom: '20px' }}>
            <StarRatings
              rating={experience}
              changeRating={(value) => setExperience(value)}
              starHoverColor="yellow"
              numberOfStars={5}
              starRatedColor="yellow"
              starDimension="30px"
            />
          </div>

          <h6 className="title">Relação de custo-benefício</h6>
          <div>
            <StarRatings
              rating={costBenefit}
              changeRating={(value) => setCostBenefit(value)}
              starHoverColor="yellow"
              numberOfStars={5}
              starRatedColor="yellow"
              starDimension="30px"
            />
          </div>

          <h6 style={{ marginTop: '20px' }} className="title">Comentário</h6>
          <div>
            <Input name="comment" />
          </div>

          {
            loading ? (
              <BounceLoader
                color="#673ab7"
                sizeUnit="px"
                size="100"
              />
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <button style={{ width: 'auto' }} type="submit" className="btn deep-purple darken-2">Finalizar</button>
              </div>
            )
          }
        </Form>
      </div>
    </main>
  );
}

export default UpdateRate;
