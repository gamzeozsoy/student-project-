package com.example.studentproject.studentproject.service;

import com.example.studentproject.studentproject.dto.RequestDto;
import com.example.studentproject.studentproject.dto.SearchRequestDTO;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class FilterSpecification<T> {

     public Specification<T> getSearchSpecification(SearchRequestDTO searchRequestDTO){

         return new Specification<T>() {
             @Override
             public Predicate toPredicate(Root<T> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
                 return criteriaBuilder.equal(root.get(searchRequestDTO.getColumn()), searchRequestDTO.getValue());
             }
         };
     }


    public Specification<T> getSearchSpecification(List<SearchRequestDTO> searchRequestDtos, RequestDto.GlobalOperator globalOperator) {
        return (root, query, criteriaBuilder) -> {

            List<Predicate> predicates = new ArrayList<>();

            for (SearchRequestDTO requestDTO : searchRequestDtos) {

                switch(requestDTO.getOperation()){

                    case EQUAL:
                        Predicate equal=criteriaBuilder.equal(root.get(requestDTO.getColumn()), requestDTO.getValue());
                        predicates.add(equal);
                        break;

                    case LIKE:
                        Predicate like=criteriaBuilder.like(root.get(requestDTO.getColumn()), "%"+ requestDTO.getValue()+"%");
                        predicates.add(like);
                        break;

                    case IN:
                        String[] split= requestDTO.getValue().split(",");
                        Predicate in= root.get(requestDTO.getColumn()).in(Arrays.asList(split));
                        predicates.add(in);
                        break;

                    case LESS_THAN:
                        Predicate lessThan=criteriaBuilder.lessThan(root.get(requestDTO.getColumn()),  requestDTO.getValue());
                        predicates.add(lessThan);
                        break;

                    case GREATER_THAN:
                        Predicate greaterThan=criteriaBuilder.greaterThan(root.get(requestDTO.getColumn()),  requestDTO.getValue());
                        predicates.add(greaterThan);
                        break;

                    case BETWEEN:
                        String[] split1 = requestDTO.getValue().split(",");
                        Integer start = Integer.parseInt(split1[0].trim());
                        Integer end = Integer.parseInt(split1[1].trim());
                        Predicate between = criteriaBuilder.between(root.get(requestDTO.getColumn()), start, end);
                        predicates.add(between);
                        break;

                    default:
                        throw new IllegalStateException("Unexpected value: " + "");



                }

            }
            if (globalOperator.equals(RequestDto.GlobalOperator.AND)) {

                return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
            }
            else{
                return criteriaBuilder.or(predicates.toArray(new Predicate[0]));

            }

        };
    }
    }
