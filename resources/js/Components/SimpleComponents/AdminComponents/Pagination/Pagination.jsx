import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import styles from './styles/style.module.scss';

export default function Pagination({ links }) {

    function getClassName(active) {
        if(active) {
            return styles.paginationLinkActive;
        } else {
            return styles.paginationLink;
        }
    }

    function formatLabel(label) {
        return <>{label.replace('&laquo; Previous', '<').replace('Next &raquo;', '>')}</>
    }

    return (
      links.length > 3 && (
          <div className={styles.pagination}>
              <div className={styles.paginationContainer}>
                  {links.map((link, key) => (
                      link.url === null ?
                            (<Link
                                className={styles.paginationLink}
                                href="">
                                { formatLabel(link.label) }
                            </Link>) :
                            (<Link
                                className={getClassName(link.active)}
                                href={ link.url }
                            >{formatLabel(link.label)}</Link>)
                      ))}
              </div>
          </div>
      )
    );

}
