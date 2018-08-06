import React from 'react';
import FontAwesome from 'react-fontawesome';

import './aboutPage.scss';

const AboutPageView = () => {
  return (
    <div className='about-page page-block'>

      <div className='block'>
        <div className='text'>
          "Шпинат" - это проект, созданный для тех, кто ведет здоровый образ жизни, осмысленно относится к
          своему
          питанию и не любит встречать химическую номенклатуру в составе продукта.
        </div>
        <div className='img-container'>
          <FontAwesome
            name='file-image-o'
            className='font-icon'/>
        </div>
      </div>

      <div className='block'>
        <div className='img-container'>
          <FontAwesome
            name='file-image-o'
            className='font-icon'/>
        </div>
        <div className='text'>
          Мы верим, что с помощью правильного рациона можно изменить образ мышления и привычки и,
          следовательно,
          жить
          полнее и счастливее. А счастливый человек - это добрый человек :) Поэтому, наша цель - сделать
          здоровое
          питание простым, понятным и доступным для всех категорий населения.
        </div>
      </div>

      <div className='block'>
        <div className='text'>
          Постоянно расширяя ассортимент магазинов "Шпинат", мы находим натуральные и полезные продукты во
          всех
          уголках (и крупных центрах) России, ориентируясь на древнейшие знания и авторитетные современные
          научные
          исследования о питании и здоровье.
        </div>
        <div className='img-container'>
          <FontAwesome
            name='file-image-o'
            className='font-icon'/>
        </div>
      </div>

      <div className='block'>
        <div className='img-container'>
          <FontAwesome
            name='file-image-o'
            className='font-icon'/>
        </div>
        <div className='text'>
          Мы рады делать добро и приносить пользу. Поэтому открыты сотрудничеству с единомышленниками и с
          интересом
          относимся к участию в экологических проектах. Если вы занимаетесь чем-то хорошим на благо другим
          людям
          (и
          планете) - напишите нам, возможно вместе мы сможем сделать больше.)
        </div>
      </div>

    </div>
  );
};

export default AboutPageView;
